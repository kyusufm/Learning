export default function Color({hex, name}){
    return(
        <div className="flex h-20 w-60 mx-1 mt-2 text-red-950 text-center items-center justify-center" style={{backgroundColor: hex}}>
        <h2 className="font-extrabold">{name.toUpperCase()}</h2>
        </div>
    )
}