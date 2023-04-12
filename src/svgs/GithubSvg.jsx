export const GithubSvg = () => {
    const svgString = `<![CDATA[
      <?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.01 66.33"><defs><style>.cls-1{fill:#222221;fill-rule:evenodd;}</style></defs><g id="Layer_1-2"><path class="cls-1" d="M34,0C15.22,0,0,15.22,0,34c0,15.05,9.73,27.76,23.25,32.26,1.7,.3,2.34-.72,2.34-1.62,0-.81-.04-3.49-.04-6.33-8.54,1.57-10.75-2.08-11.43-4-.38-.98-2.04-4-3.49-4.8-1.19-.64-2.89-2.21-.04-2.25,2.68-.04,4.59,2.47,5.23,3.49,3.06,5.14,7.95,3.7,9.9,2.81,.3-2.21,1.19-3.7,2.17-4.55-7.57-.85-15.47-3.78-15.47-16.79,0-3.7,1.32-6.76,3.49-9.14-.34-.85-1.53-4.34,.34-9.01,0,0,2.85-.89,9.35,3.49,2.72-.77,5.61-1.15,8.5-1.15s5.78,.38,8.5,1.15c6.5-4.42,9.35-3.49,9.35-3.49,1.87,4.68,.68,8.16,.34,9.01,2.17,2.38,3.49,5.4,3.49,9.14,0,13.05-7.95,15.94-15.51,16.79,1.23,1.06,2.3,3.1,2.3,6.29,0,4.55-.04,8.2-.04,9.35,0,.89,.64,1.96,2.34,1.62,13.43-4.51,23.17-17.26,23.17-32.26C68.01,15.22,52.79,0,34,0Z"/></g></svg>
      `;
    return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
}