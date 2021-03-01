import React from "react"

const Title = ({ title, color }) => {
  const styles = {
    underline: "w-20 h-0.5 my-4 mx-auto bg-green-600",
  }

  return (
    <div className="text-center capitalize">
      <h2 className={`text-4xl text-${color ? color : ""} font-normal`}>
        {title || "Default Title"}
      </h2>
      <div className={styles.underline}></div>
    </div>
  )
}

export default Title
