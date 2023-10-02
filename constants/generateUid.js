function generateUniqueKey(item) {
    const contentHash = hashCode(JSON.stringify(item));
    const randomSuffix = Math.random().toString(36).substring(7);
    return `item_${contentHash}_${randomSuffix}`;
  }
  
  // Hashing function to create a content-based hash
  function hashCode(str) {
    let hash = 0;
    if (str.length === 0) {
      return hash;
    }
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString(16); // Convert to a hexadecimal string
  }
export default generateUniqueKey;