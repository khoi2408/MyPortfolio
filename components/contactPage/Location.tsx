import MyInfo from "../MyInfo"

export default function Location() {
  return (
    <div className="p-12">
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value="Binh Thanh District, Ho Chi Minh City" />
        <MyInfo field="email" value="lkhoi2k@gmail.com" />
        <MyInfo field="phone" value="0854272445" />
        <MyInfo field="freelance" value="Available" />
      </ul>
    </div>
  )
}
