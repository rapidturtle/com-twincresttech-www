require "test_helper"

feature "Home Page" do
  scenario "visit home page" do
    visit root_path
    page.must_have_selector "h1", text: "Twincrest Technologies"
  end
end
