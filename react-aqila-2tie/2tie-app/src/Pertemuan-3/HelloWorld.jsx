export default function HelloWorld(){
    const propsUsecard = {
        nama: "Bunga",
        nim : "1026358610",
        tanggal: "2005/10/16",
    };
    return (
        <div>
            <img src = "img/Alam.png" width="100%" />
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GretingBinjai/>
            <QuoteText/>
            <UserCard nama = "Aqila" nim = "2455301029" tanggal = "2006/03/10"/>
            <UserCard {...propsUsecard}/>
        </div>
    )
}

function GretingBinjai(){
    return(
        <small> Salam Dari binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}