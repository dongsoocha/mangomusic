class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    attr_reader :password

    # SPIRE

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)

        @password = password
    end
    
    def is_password?(password)
        BCrpyt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token

    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
