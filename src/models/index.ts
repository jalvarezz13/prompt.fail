export interface ILlm {
  id: string
  icon: string
  name: string
  organization: string
  organization_icon: string
  license: string
}

export interface IPrompt {
  id: string
  name: string
  prompt: string
  contributor: {
    name: string
    url: string
  }
  results: {
    [key: string]: string
  }
}
