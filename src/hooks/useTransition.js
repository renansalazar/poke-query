import { useNavigate } from "react-router-dom";
export const useTransition = () => {
  const navigate = useNavigate()

  const navigateTo = (path) => {
    // window.location.href = path
    if (!document.startViewTransition) {
      return navigate(path)
    }
    return document.startViewTransition(() => {
      navigate(path)
    })
  }

  return {
    navigateTo
  }
}