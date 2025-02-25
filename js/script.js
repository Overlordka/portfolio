function generate (form){
    let prompt = "a portrait of a" + " "
    prompt += form.elements.type.value + " " + "character, "
    prompt += form.elements.gender.value + ", "
    prompt += form.elements.age.value + "yo" + ", "
    prompt += form.elements.hairType.value + " "
    prompt += form.elements.hair.value + " " + "hair" + ", "
    prompt += "with" + " " + form.elements.cloth.value + " " + ", "
    prompt += form.elements.nationality.value + " " + "nationality" + ", "
    prompt += form.elements.background.value + " " + "on background"

    console.log(prompt)

    prompt = encodeURI(prompt)

    let parameters = "?width=512&height=512&seed=100&nologo=true&model=flux-3d"

    let url = "https://image.pollinations.ai/prompt/" + prompt + parameters


    document.getElementById("avatar-image").src = url
    
}