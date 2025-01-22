
import React from "react";

interface TruncateDescriptionProps {
  description: string;
  lines: number; 
}

const TruncateDescription: React.FC<TruncateDescriptionProps> = ({ description, lines }) => {
    const truncateDescription =(des:string,wordCound:number)=>{
        const words =[]
        let wordIndex = 0

    const regex =/(<.*?>|[^<>\s]+(\s*))/g
    let match;
    while ((match = regex.exec(des))!== null) {
        if (wordIndex < wordCound) {
            words.push(match[0])
           wordIndex++
        }else{
            break
        }
    }
    return words.join(' ') + ("...")
    }
  return (
    <div className={`text-gray-700 text-wrap text-18px`}>
        <div dangerouslySetInnerHTML={{__html:truncateDescription(description,lines)}}/>
      {/* {description} */}
    </div>
  );
};

export default TruncateDescription;
