import Header from "../components/common/Header";
import { formatNumber } from "../utils/format";

function Home() {

  return (
    <div>
      <Header />
      <div>book store</div>
      <div>count : {formatNumber(10000)}</div>
    </div>
  )
}

export default Home;