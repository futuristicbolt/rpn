export function decodeFBString(str) {
    const arr = [];
    if(str && str.length) {
      for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        arr.push(charCode);
      }
      const uintArray = new Uint8Array(arr);
      const decoder = new TextDecoder("utf-8");
      const decodedStr = decoder.decode(uintArray);
      return decodedStr;
    }
  }
