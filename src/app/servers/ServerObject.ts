export class ServerObject {
  private serverCreationStatus: string;
  private allowNewServer: boolean;

  constructor(serverCreationStatus, allowNewServer) {
    this.serverCreationStatus = serverCreationStatus;
    this.allowNewServer = allowNewServer;
  }


  getServerCreationStatus(): string {
    return this.serverCreationStatus;
  }

  setServerCreationStatus(value: string): void {
    this.serverCreationStatus = value;
  }

  getAllowNewServer(): boolean {
    return this.allowNewServer;
  }

  setAllowNewServer(value: boolean): void {
    this.allowNewServer = value;
  }
}
