import Layout from "@/components/layout/Layout"

export default function Terms() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={2} breadcrumbTitle="Lietošanas noteikumi">
        <div className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="terms-content" style={{ color: '#333' }}>
                  <div className="terms-section mb-5">
                    <h2 className="mb-4" style={{ color: '#222' }}>Service Agreement</h2>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                      By using our freight transport services, you agree to these terms. We provide freight 
                      transportation services in the Vidzeme region of Latvia, including the use of a 
                      manipulator truck for loading and unloading.
                    </p>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="mb-4" style={{ color: '#222' }}>Service Scope</h2>
                    <ul className="mb-4" style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                      <li className="mb-2">Transportation of construction materials and equipment</li>
                      <li className="mb-2">Loading and unloading with manipulator truck</li>
                      <li className="mb-2">Local and regional deliveries within Vidzeme</li>
                      <li className="mb-2">Flexible scheduling based on availability</li>
                    </ul>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="mb-4" style={{ color: '#222' }}>Pricing and Payment</h2>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                      Pricing is based on distance, cargo type, and service requirements. Payment terms 
                      will be discussed and agreed upon before service provision. We accept standard 
                      payment methods common in Latvia.
                    </p>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="mb-4" style={{ color: '#222' }}>Liability</h2>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                      We maintain appropriate insurance coverage for our services. Specific liability 
                      terms will be provided in the service agreement. Clients are responsible for 
                      accurate cargo information and proper packaging.
                    </p>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="mb-4" style={{ color: '#222' }}>Cancellation Policy</h2>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                      Please provide at least 24 hours notice for cancellations. Late cancellations may 
                      incur a fee. We reserve the right to cancel services due to weather conditions or 
                      technical issues.
                    </p>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="mb-4" style={{ color: '#222' }}>Contact</h2>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                      For questions about these terms or our services, please contact us using the 
                      information provided on our Contact page.
                    </p>
                  </div>

                  <div className="terms-section">
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