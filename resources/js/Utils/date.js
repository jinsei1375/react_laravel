// utils/date.js
export function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ja-JP", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    }).format(date);
}
