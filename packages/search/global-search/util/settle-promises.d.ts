/**
 * Creates a Promise that is resolved with an array of results when all of the
 * provided Promises resolve OR reject.
 *
 * Any rejected promise will be of type Error where there the message is the
 * reason of the rejection.
 *
 * @param values An array of Promises.
 * @returns A new Promise.
 */
export default function settlePromises(values: Promise<any>[]): Promise<any[]>;
