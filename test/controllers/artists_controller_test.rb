# == Schema Information
#
# Table name: artists
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string
#

require 'test_helper'

class ArtistsControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
end
