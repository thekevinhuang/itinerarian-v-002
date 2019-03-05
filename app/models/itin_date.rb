class ItinDate < ActiveRecord::Base
    belongs_to :itinerary
    has_many :ipoints
end