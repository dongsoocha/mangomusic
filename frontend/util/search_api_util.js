export const getSearchResults = (search) => {
    return $.ajax({
        url: "/api/search",
        method: "GET",
        data: { search },
    });
};