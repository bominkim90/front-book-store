import { formatNumber } from "../utils/format";

function Home() {

  return (
    <div>
      <div>홈</div>
      <div>count : {formatNumber(10000)}</div>
    </div>
  )
}

export default Home;