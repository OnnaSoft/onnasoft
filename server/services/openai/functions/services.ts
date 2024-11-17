export abstract class OpenAIService {
  readonly function_name: string = "";
  readonly description: string = "";

  abstract processServiceRequest(request: any): Promise<string>;
}
