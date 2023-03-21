import { useQuery } from "react-query";
import { useAuth } from "../contexts/AuthContext";
import { Quote } from "../interfaces/types";
import { getQuotesList } from "../lib/listQuotes";

export const useQueryQuotes = (filter) => {
    const { getUserAttributeByName } = useAuth();
    return useQuery<Quote[]>(['quotes', filter], async () => {
        const sub = await getUserAttributeByName('sub');
        return await getQuotesList(sub).then(result => result.data);
    }, { 
        select: (quotes) => quotes.filter((quote) => filterBy(quote, filter)),
    });
}

const filterBy = (quote: Quote, filter: string) => {
    const uncapitalizedTitle = quote.title.toLowerCase();
    const uncapitalizedDescription = quote.title.toLowerCase();
    const uncapitalizedFilter = filter.toLowerCase();
    return uncapitalizedTitle.includes(uncapitalizedFilter) ||  uncapitalizedDescription.includes(uncapitalizedFilter)
}
