import { AmountPendingCard } from "./components/AmountPendingCard"
import { AmountProcessedCard } from "./components/AmountProcessedCard"

function App() {

  return (
    <>
      <div className="flex flex-wrap gap-5">
        <AmountPendingCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"} />
        <AmountProcessedCard title={"Amount Processed"} amount={"23,92,312.19"} />

      </div>
    </>
  )
}

export default App
