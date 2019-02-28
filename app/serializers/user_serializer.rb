class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :email
    has_many :itineraries, serializer: ItinerarySerializer
end