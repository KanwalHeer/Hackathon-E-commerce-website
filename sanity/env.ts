export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_TOKEN,
  'Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN'
)

// const NEXT_PUBLIC_SANITY_TOKEN ="skWGZXKAjKpTZBebdtjbnDyi0ytW3PkqUbx63e0LaRROMF4bQdN2orjBTBRfzKEtm96g0Kb3slzw2rDc6wBJcQPfsTZBQfLFkJbCDSsHQsX5S2tFbsm8E8YFfKoLe2l8VbIDXYuXk6d8JfLJqQULryIYKNI1xlhQ4DkTSEhvmT0O8xxDcMHY"

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

