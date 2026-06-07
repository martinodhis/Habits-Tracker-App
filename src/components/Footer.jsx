function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer_inner">
        <div className="footer_brand">
          <p className="footer_brandname">HabitTracker</p>
        </div>
        <p className="footer_tagline">Build better habits, one day at a time.</p> //
      </div>

      <div className="footer_bottom">
        <p>&copy; {year} HabitTracker. All rights reserved.</p>
        <p>Built with React</p>
      </div>
    </footer>
  )
}

export default Footer