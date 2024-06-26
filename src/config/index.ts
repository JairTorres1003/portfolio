import { z } from 'zod'

/**
 * This file is used to define the environment variables that are required by the application.
 */
const configSchema = z.object({
  /**
   * It is the base URL of the deployed application
   */
  NEXT_PUBLIC_BASE_URL: z.string().url(),
})

configSchema.parse(process.env)

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof configSchema> {}
  }
}
