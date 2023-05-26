import { useQuery } from "react-query";
import { Quote } from "../interfaces/types";
import { getQuotesList } from "../lib/listQuotes";
import useAuthenticatedUser from "./useAuthenticatedUser";

export const useQueryQuotes = (filter) => {
    const [authenticatedUser] = useAuthenticatedUser();
 
    return useQuery<Quote[]>(['quotes', filter], async () => {
        const username = authenticatedUser?.username;
        return await getQuotesList(username).then(result => result.data);
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
