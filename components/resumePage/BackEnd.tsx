import { FieldValueData } from "../../types"
import BackEndSkeleton from "./BackEndSkeleton"

interface Props {
  backend: FieldValueData[] | undefined
}

export default function BackEnd({ backend }: Props) {
  return (
    <div className="pt-11">
      {backend ? (
        backend.map((b) => (
          <div key={b.id} className="mb-7">
            <h3 className="capitalize text-2xl text-gray-300">{b.field}</h3>
            </div>
        ))
      ) : (
        <>
          <BackEndSkeleton />
          <BackEndSkeleton />
          <BackEndSkeleton />
          <BackEndSkeleton />
        </>
      )}
    </div>
  )
}