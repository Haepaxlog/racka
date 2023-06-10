import { h } from "preact";
import { useState } from "preact/hooks";
import { ReactReader } from "react-reader";

import type { FunctionComponent } from "preact";

interface EpubDisplayerProps {
  url: string;
  renditionRef: any;
}

export const EpubDisplayer: FunctionComponent<EpubDisplayerProps> = (props) => {
  const [location, setLocation] = useState(null);
  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi);
  };

  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        location={location}
        locationChanged={locationChanged}
        url={props.url}
        epubInitOptions={{
          openAs: "epub",
        }}
        getRendition={(rendition) => {
          props.renditionRef.current = rendition;
        }}
      />
    </div>
  );
};
