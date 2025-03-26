// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function handleFileUpload(file: File | null, setCredential: any) {
  if (!file) return null;
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target?.result as string ?? '';
    try {
      setCredential(text);
    } catch (e) {
      console.log("couldn't parse json")
      console.log(e)
    }
  };
  reader.readAsText(file, 'UTF-8');
}

