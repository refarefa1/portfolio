export const LinkedinSvg = () => {
    const svgString = `<![CDATA[
      <?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.93 67.93"><defs><style>.cls-1{fill:#222221;}</style></defs><g id="Layer_1-2"><path class="cls-1" d="M33.97,0C15.21,0,0,15.21,0,33.97H0c0,18.76,15.21,33.97,33.97,33.97s33.97-15.21,33.97-33.97h0C67.93,15.21,52.73,0,33.97,0Zm-8.37,49.11h-7.03V26.39h7.03v22.71Zm-3.55-25.68c-2.3,0-4.16-1.88-4.16-4.19s1.86-4.19,4.16-4.19,4.16,1.88,4.16,4.19-1.86,4.19-4.16,4.19Zm29.89,25.68h-7v-11.92c0-3.27-1.24-5.09-3.83-5.09-2.81,0-4.28,1.9-4.28,5.09v11.92h-6.74V26.39h6.74v3.06s2.03-3.75,6.84-3.75,8.26,2.94,8.26,9.02v14.38Z"/></g></svg>
      `;
    return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
}
