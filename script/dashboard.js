const API="https://phi-lab-server.vercel.app/api/v1/lab"

let issues=[]

async function loadIssues(){

document.getElementById("spinner").style.display="block"

const res=await fetch(API+"/issues")

const data=await res.json()

issues=data.data

renderIssues(issues)

document.getElementById("spinner").style.display="none"

}

function renderIssues(list){

const container=document.getElementById("issues")

container.innerHTML=""

list.forEach(issue=>{

let color=issue.status==="open"?"border-green-500":"border-purple-500"

const card=document.createElement("div")

card.className=`bg-white p-4 rounded shadow border-t-4 ${color} cursor-pointer`

card.innerHTML=`

<h3 class="font-bold mb-2">${issue.title}</h3>

<p class="text-sm text-gray-600 mb-2">${issue.description}</p>

<p class="text-xs">Status: ${issue.status}</p>
<p class="text-xs">Category: ${issue.category}</p>
<p class="text-xs">Author: ${issue.author}</p>
<p class="text-xs">Priority: ${issue.priority}</p>
<p class="text-xs">Label: ${issue.label}</p>
<p class="text-xs">Created: ${issue.createdAt}</p>

`

card.onclick=()=>openModal(issue.id)

container.appendChild(card)

})

}

function changeTab(type,btn){

 document.querySelectorAll(".tab").forEach(b=>{
b.classList.remove("bg-[#4a00ff]","text-white")
b.classList.add("bg-white text-black")
})

btn.classList.add("bg-[#4a00ff]","text-white")

let filtered=issues

if(type==="open"){

filtered=issues.filter(i=>i.status==="open")

}

if(type==="closed"){

filtered=issues.filter(i=>i.status==="closed")

}

renderIssues(filtered)

}


// new function 
function changeTab(type,btn){

const tabs=document.querySelectorAll(".tab")

tabs.forEach(tab=>{
tab.classList.remove("bg-[#4a00ff]","text-white")
tab.classList.add("bg-gray-200")
})

btn.classList.remove("bg-gray-200")
btn.classList.add("bg-[#4a00ff]","text-white")

let filtered=issues

if(type==="open"){
filtered=issues.filter(i=>i.status==="open")
}

if(type==="closed"){
filtered=issues.filter(i=>i.status==="closed")
}

renderIssues(filtered)

}

// new functon end

async function openModal(id){

const res=await fetch(API+"/issue/"+id)

const data=await res.json()

const issue=data.data

document.getElementById("modalBody").innerHTML=`

<h3 class="font-bold">${issue.title}</h3>

<p class="text-sm mb-2">${issue.description}</p>

<p>Status: ${issue.status}</p>
<p>Category: ${issue.category}</p>
<p>Author: ${issue.author}</p>
<p>Priority: ${issue.priority}</p>
<p>Label: ${issue.label}</p>
<p>Created: ${issue.createdAt}</p>

`

document.getElementById("modal").classList.remove("hidden")
document.getElementById("modal").classList.add("flex")

}

function closeModal(){

document.getElementById("modal").classList.add("hidden")

}

async function searchIssues(){

const text=document.getElementById("searchInput").value

const res=await fetch(API+"/issues/search?q="+text)

const data=await res.json()

renderIssues(data.data)

}

loadIssues()