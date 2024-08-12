const Card = () => {
  return (<>
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://m.media-amazon.com/images/I/41A8MP9gFAL._SR480,440_.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">₹29,990.00</h5>
        <p className="card-text">HP Laptop 15s, AMD Ryzen 3 5300U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, AMD Radeon Graphics, Thin & Light, Dual Speakers (Win 11, MSO 2019, Silver, 1.69 kg), eq2143AU</p>
        <a href="https://www.amazon.in/HP-15-6inch-Micro-Edge-Anti-Glare-15s-Eq2143au/dp/B09R1MMMTH?pd_rd_w=Ou6Wd&content-id=amzn1.sym.3b4cdaa5-4276-4051-96ba-6262467b7c89&pf_rd_p=3b4cdaa5-4276-4051-96ba-6262467b7c89&pf_rd_r=8JMDSW6RT1XQ23TM2KND&pd_rd_wg=RE0L7&pd_rd_r=e2b49e87-127e-4b8b-a3e6-f043749e4d56&pd_rd_i=B09R1MMMTH&ref_=pd_hp_d_btf_unk_B09R1MMMTH" className="btn btn-primary">Buy now</a>
      </div>
    </div>
  </>);
}

export default Card;