export const SearchButton = () => (
    <span className="absolute inset-y-0 right-0 flex items-center pr-4">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
            <svg 
                fill="none" 
                stroke="currentColor" 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                className="w-6 h-6"
            >
                <path color="#FFFFFF" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
    </span>
);
