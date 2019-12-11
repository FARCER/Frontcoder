export class Contact {
  constructor(
    public name: string,
    public phone: string,
    public id?: string,
  ) {
    this.id = '_' + Math.random().toString(36).substr(2, 9);
  }
}
