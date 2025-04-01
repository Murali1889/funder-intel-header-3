export interface MCALender {
  id: string
  name: string
  logo: string
  description: string
  minFunding: number
  maxFunding: number
  fundingSpeed: number
  minTimeInBusiness: number
  minCreditScore: number
  industries: string[]
  rating: number
  verified: boolean
  directFunder: boolean
  website: string
  contactEmail?: string
  contactPhone?: string
  location?: string
}

