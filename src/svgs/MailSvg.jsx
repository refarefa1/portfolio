export const MailSvg = () => {
    const svgString = `<![CDATA[
      <?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.06 68.06"><defs><style>.cls-1{fill:#222221;}</style></defs><g id="Layer_1-2"><path class="cls-1" d="M34.03,0C15.24,0,0,15.24,0,34.03s15.24,34.03,34.03,34.03,34.03-15.24,34.03-34.03S52.83,0,34.03,0Zm-14.55,19.37h29.11c.64,0,1.25,.14,1.8,.38-.13,.08-.26,.17-.37,.29l-13.01,14.76c-.75,.85-1.84,1.34-2.98,1.34s-2.22-.49-2.98-1.34l-13.24-15.02s-.05-.04-.07-.06c.53-.22,1.11-.34,1.73-.34Zm33.6,24.83c0,2.48-2.01,4.5-4.5,4.5H19.48c-2.48,0-4.5-2.01-4.5-4.5V23.87c0-.85,.24-1.64,.65-2.32,.02,.03,.04,.07,.07,.1l13.24,15.02c1.29,1.46,3.15,2.3,5.09,2.3s3.81-.84,5.09-2.3l13.01-14.76c.11-.13,.2-.28,.25-.43,.44,.69,.69,1.51,.69,2.39v20.33Z"/></g></svg>
      `;
    return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
}