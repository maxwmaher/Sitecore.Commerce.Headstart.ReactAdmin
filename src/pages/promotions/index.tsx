import PromotionList from "@/components/promotions/list/PromotionList"
import ProtectedContent from "components/auth/ProtectedContent"
import {appPermissions} from "config/app-permissions.config"

const ProtectedPromotionsList = () => {
  return (
    <ProtectedContent hasAccess={appPermissions.OrderManager}>
      <PromotionList />
    </ProtectedContent>
  )
}

export default ProtectedPromotionsList
