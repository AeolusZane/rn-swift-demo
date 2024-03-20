//
//  CounterViewManager.swift
//  Counter
//
//  Created by 张敬峥 on 2024/3/20.
//

import Foundation
@objc(CounterViewManager)
class CounterViewManager: RCTViewManager {
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  override func view() -> UIView! {
      return CounterView()
  }
  @objc func updateFromManager(_ node: NSNumber, count: NSNumber) {
      
      DispatchQueue.main.async {                                // 2
        let component = self.bridge.uiManager.view(             // 3
          forReactTag: node                                     // 4
        ) as! CounterView                                       // 5
        component.update(value: count)                          // 6
      }
    }
}
