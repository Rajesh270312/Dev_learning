
export function Achievementcard({path,title,description}){
    return (
        <div className="achieve-card" style={{textAlign:"left",padding:"14px", gap:"10px", width:"100%",borderRadius:"10px",color:"white",border:"2px solid orange",backgroundColor:"white" ,textWrap:"wrap"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15000 512"><path fill="#ff621f" d={path}/></svg>
            <h3 style={{fontFamily:"'Be Vietnam Pro',sans-serif" , color: "rgba(38, 38, 38, 1)"}}>{title}</h3>
            <p style={{fontFamily:"'Be Vietnam Pro',sans-serif" , color: "rgba(89, 89, 90, 1)"}}>{description}</p>
        </div>
    )
}