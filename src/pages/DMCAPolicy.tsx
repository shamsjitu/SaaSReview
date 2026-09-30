/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function DMCAPolicy() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4">DMCA Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Last Updated: September 2026</p>

        <div className="prose prose-lg text-body-text max-w-none space-y-8">
          <section>
            <p>
              ShamsStack respects the intellectual property rights of others and expects its users to do the same.
              We respond to clear notices of alleged copyright infringement that comply with the U.S. Digital
              Millennium Copyright Act (DMCA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Filing a DMCA Notice</h2>
            <p>
              If you believe content on ShamsStack infringes your copyright, please send a written notice that
              includes:
            </p>
            <p>
              A description of the copyrighted work you claim has been infringed; the exact URL(s) of the material
              you believe is infringing; your contact information (name, address, phone number, and email); a
              statement that you have a good-faith belief the use is not authorized by the copyright owner, its
              agent, or the law; and a statement, made under penalty of perjury, that the information in your
              notice is accurate and that you are the copyright owner or authorized to act on their behalf.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Where to Send Notices</h2>
            <p>
              Send DMCA notices to dmca@shamsstack.com. We will review valid notices and remove or disable access
              to the reported material as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Counter-Notification</h2>
            <p>
              If you believe material you posted was removed in error, you may submit a counter-notice with your
              contact information, identification of the removed material, and a statement under penalty of
              perjury that you have a good-faith belief the material was removed by mistake or misidentification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Repeat Infringers</h2>
            <p>
              We reserve the right to remove or disable access to content and, where appropriate, terminate
              accounts of users who are repeat infringers.
            </p>
          </section>

          <section className="p-8 bg-gray-50 rounded-[32px] border border-gray-100">
            <h2 className="text-xl font-bold text-primary mb-4">Questions?</h2>
            <p className="text-sm">
              If you have any questions about this DMCA Policy, please contact us at dmca@shamsstack.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
