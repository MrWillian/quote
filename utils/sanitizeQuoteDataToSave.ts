import { v4 as uuidv4 } from 'uuid';
import { sanitizeDate } from "./sanitizeDate"

export const sanitizeQuoteDataToSave = async (payload, sub: string) => ({
        id: uuidv4(),
        title: payload.title,
        description: payload.description,
        user_id: sub,
        date: sanitizeDate(payload.date),
        created_at: new Date(),
        updated_at: null
    }
)
