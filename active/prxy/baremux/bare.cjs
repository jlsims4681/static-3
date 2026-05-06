/* BareMux Transport Script */
const Bare=JSON.parse(JSON.stringify({}));async function setup(){return{ready:!0}}Bare.init=setup;Bare.ready=setup;Bare.connect=async(e,t,r)=>{const n=await fetch(e,{method:"GET",headers:t,redirect:"follow"});return n};export default Bare;
