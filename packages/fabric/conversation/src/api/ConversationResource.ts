import { Comment, Conversation } from '../model';

export interface ConversationResourceConfig {
  url: string;
  containerId: string;
  externalId: string;
}

export interface ResourceProvider {
  getConversations(): Promise<any>;
  getConversation(id: string): Promise<Conversation>;
  create(meta: any): Promise<Conversation>;
  addComment(
    conversationId: string,
    parentId: string,
    document: any,
  ): Promise<Comment>;
  updateComment(
    conversationId: string,
    commentId: string,
    document: any,
  ): Promise<Comment>;
}

export class ConversationResource implements ResourceProvider {
  private config: ConversationResourceConfig;

  constructor(config: ConversationResourceConfig) {
    this.config = config;
  }

  private async makeRequest(path: string, options: RequestInit = {}) {
    const { url } = this.config;
    const fetchOptions = {
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...options,
    };

    const response = await fetch(`${url}${path}`, fetchOptions as any);

    if (!response.ok) {
      // tslint:disable-next-line no-console
      console.log(response);
      return null; // Should probably return an error
    }

    return await response.json();
  }

  /**
   * Retrieve the IDs (and meta-data) for all conversations associated with the external ID.
   */
  async getConversations() {
    const { externalId } = this.config;

    return await this.makeRequest(`/conversation?externalId=${externalId}`, {
      method: 'GET',
    });
  }

  /**
   * Get Conversation by ID
   */
  async getConversation(id: string): Promise<Conversation> {
    return await this.makeRequest(`/conversation/${id}`, {
      method: 'GET',
    });
  }

  /**
   * Creates a new Conversation and associates it with the
   * externalId provided.
   */
  async create(meta: any): Promise<Conversation> {
    const { containerId, externalId } = this.config;

    return await this.makeRequest('/conversation', {
      method: 'POST',
      body: JSON.stringify({ containerId, externalId, meta }),
    });
  }

  /**
   * Adds a comment to a parent. ParentId can be either a
   * conversation or another comment.
   */
  async addComment(
    conversationId: string,
    parentId: string,
    document: any,
  ): Promise<Comment> {
    const createdBy = {
      id: 'abc',
      avatarUrl:
        'https://avatar-cdn.atlassian.com/491866d8ecb0256e17e8195ab3cdb233?s=32',
      name: 'Oscar Wallhult',
    };

    const result = await this.makeRequest(
      `/conversation/${conversationId}/comment`,
      {
        method: 'POST',
        body: JSON.stringify({
          parentId,
          createdBy,
          document,
        }),
      },
    );

    return {
      ...result,
      document,
    };
  }

  /**
   * Updates a comment based on ID. Returns updated content
   */
  async updateComment(
    conversationId: string,
    commentId: string,
    document: any,
  ): Promise<Comment> {
    const { externalId, containerId } = this.config;

    const result = await this.makeRequest(
      `/conversation/${conversationId}/comment/${commentId}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          id: commentId,
          document,
          externalId,
          containerId,
        }),
      },
    );

    return result;
  }
}
