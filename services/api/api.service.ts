import { urls } from "./endpoints";
import { HttpMethods } from "./methods.enum";
import { RequestBody } from "./request.interface";

export default class ApiHandler {
  public async get({ endpoint, body }: RequestBody) {
    try {
      const url: URL = new URL(this.getApiURL() + endpoint);
      const headers: Headers = this.getHeaders();

      for (let attribute in body) {
        if (typeof body[attribute] === "object") {
          url.searchParams.append(attribute, JSON.stringify(body[attribute]));
        } else {
          url.searchParams.append(attribute, body[attribute]);
        }
      }

      const requestSettings: RequestInit = {
        method: HttpMethods.GET as string,
        headers,
      };

      const response: any = await this.fetchRequest(
        url.toString(),
        requestSettings,
      );

      return response;
    } catch (error) {
      throw error;
    }
  }

  public async put({ endpoint, body }: RequestBody) {
    try {
      const url: URL = new URL(this.getApiURL() + endpoint);
      const headers: Headers = this.getHeaders();

      const requestSettings: RequestInit = {
        method: HttpMethods.PUT as string,
        body: JSON.stringify(body),
        headers,
      };

      const response: any = await this.fetchRequest(
        url.toString(),
        requestSettings,
      );

      return response;
    } catch (error) {
      throw error;
    }
  }

  private getApiURL(): string {
    try {
      const currentEnv: string = process.env.EXPO_PUBLIC_ENV ?? "test";

      if (currentEnv === "test") return urls.test.api;
      else if (currentEnv === "dev") return urls.dev.api;
      else if (currentEnv === "prod") return urls.prod.api;
      else throw new Error("API Url not found");
    } catch (error) {
      throw new Error(`Error getting the API Url: ${error}`);
    }
  }

  private getHeaders(): Headers {
    try {
      const headers: Headers = new Headers();
      headers.append("content-type", "application/json");
      return headers;
    } catch (error) {
      throw new Error(`Error defining the headers: ${error}`);
    }
  }

  private async fetchRequest(
    url: URL | string,
    settings: RequestInit,
  ): Promise<any> {
    try {
      const response = await fetch(url, settings);
      const responseBody: any = await response.json();
      if (!response.ok) throw new Error(responseBody.error);
      return responseBody;
    } catch (error) {
      throw new Error(`Error doing the petition: ${error}`);
    }
  }
}
