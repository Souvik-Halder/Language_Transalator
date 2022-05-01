const translateText=()=>{
//   console.log("Clicked");
//Getting the text from text area
const text=document.getElementById('floatingTextarea1').value;
// console.log(text);
const updatedtext=document.getElementById('floatingTextarea2')
const translatelanguage=document.getElementById('first_select').value;
// console.log(translatelanguage);
const translateToLanguage=document.getElementById('second_select').value;
// console.log(translateToLanguage);
const  fetchText=async()=> {
    let response = await fetch(`https://api.mymemory.translated.net/get?q=${text}!&langpair=${translatelanguage}|${translateToLanguage}`);

    // console.log(response.status); // 200
    // console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        const objdata=JSON.parse(data);console.log()
        const arrdata=[objdata];
        const realtimeData=arrdata.map((val)=> {
            // console.log(val);
            updatedtext.value=val.responseData.translatedText;

           
        }
            )
            .join("");
           
    }
    
}

fetchText();
}