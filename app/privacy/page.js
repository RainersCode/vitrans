import Layout from "@/components/layout/Layout"

export default function Privacy() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={2} breadcrumbTitle="Privātuma politika">
        <div className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="privacy-content" style={{ color: '#333' }}>
                  
                  <div className="privacy-section mb-5">
                    <h2 className="mb-4" style={{ color: '#222' }}>Information We Collect</h2>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                      We collect information you provide directly to us, such as when you request freight transportation services, 
                      create an account, or contact us for support.
                    </p>
                  </div>

                  <div className="privacy-section mb-5">
                    <h2 className="mb-4" style={{ color: '#222' }}>How We Use Your Information</h2>
                    <p className="mb-3" style={{ lineHeight: '1.8' }}>We use the information we collect to:</p>
                    <ul className="mb-4" style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                      <li className="mb-2">Provide, maintain, and improve our freight transportation services</li>
                      <li className="mb-2">Process transactions and shipments</li>
                      <li className="mb-2">Send you technical notices and support messages</li>
                      <li className="mb-2">Communicate with you about services, offers, and events</li>
                    </ul>
                  </div>

                  <div className="privacy-section mb-5">
                    <h2 className="mb-4" style={{ color: '#222' }}>Information Sharing</h2>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                      We do not sell, trade, or otherwise transfer your personal information to third parties 
                      except as described in this policy or with your consent.
                    </p>
                  </div>

                  <div className="privacy-section mb-5">
                    <h2 className="mb-4" style={{ color: '#222' }}>Data Security</h2>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                      We implement appropriate security measures to protect your personal information against 
                      unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </div>

                  <div className="privacy-section mb-5">
                    <h2 className="mb-4" style={{ color: '#222' }}>Contact Us</h2>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                      If you have questions about this Privātuma politika, please contact us using the information 
                      provided on our Contact page.
                    </p>
                  </div>

                  <div className="privacy-section">
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>Last updated: 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
} 