function formatRelativeTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now - date;

  // Convert difference to seconds
  const seconds = Math.floor(diff / 1000);

  // Logic to determine the appropriate time unit
  if (seconds < 60) {
    return `${seconds}s ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes}min ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours}h ago`;
  } else if (seconds < 2592000) {
    const days = Math.floor(seconds / 86400);
    return `${days}d ago`;
  } else {
    const months = Math.floor(seconds / 2592000);
    return `${months}mo ago`;
  }
}

module.exports = {
  formatRelativeTime,
};
