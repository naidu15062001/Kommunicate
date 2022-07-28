function uri(urlString){

    let url=new URL(urlString);
    let searchString=url.search.slice(1);

    let searchParams=new URLSearchParams(searchString);
    let inputParam=input.value;

    if(searchParams.has(inputParam))
    {
        innerText=searchParams.get(inputParam);
        console.log(innerText);
    }
    else{
        console.log('Wrong params');
    }

}

uri("https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby");