import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@ashina/server';

export const trpc = createTRPCReact<AppRouter>();
